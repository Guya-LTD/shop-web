import React from 'react';
import Breadcrumb from '@bit/guya-ltd.gcss.molecules.breadcrumb';
import Link from '@bit/guya-ltd.gcss.atoms.link';
import Typography from '@bit/guya-ltd.gcss.atoms.typography';
import HomeLayout from 'pages/HomeLayout';
import I18n from 'I18n';
import { 
    ReactiveBase, 
    DynamicRangeSlider,
    RatingsFilter,
    SelectedFilters,
    ReactiveList,
    ResultCard,
    SingleList
} from '@appbaseio/reactivesearch';

const SearchPage = (props) => {
    /* Localization */
    const locale = props.match.params.locale == null ? 'en' : props.match.params.locale;

    const { ResultCardsWrapper } = ReactiveList;

    return(
        <ReactiveBase
            app="kibana_sample_data_ecommerce"
            url="http://127.0.0.1:50000/"
            >
            <HomeLayout locale={locale} route_location='search'>
                <div className="row">
                    <div className="col-xs-12 col-md-1" />
                    <div className="col-xs-12 col-md-2">
                        <br />
                        <Breadcrumb
                            lists={
                                [
                                { state: 'none', link: <Link href="#" theme="cornflower-blue" size='sm'><I18n t="home" />&nbsp;</Link>},
                                    { state: 'active', link: <Link href="#" theme="cornflower-blue" size='sm'><I18n t="search"/></Link>}
                                ]
                            }
                        />
                    </div>
                    <div className="col-xs-0 col-md-1"/>
                    <div className="col-xs-6">
                        <br /><br />
                        <SelectedFilters />
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-xs-1 col-md-2" />
                    <div className="col-xs-10">
                        <div className="row">
                            <div className="col-xs-12 col-md-2">
                                Filter by
                                <div>
                                <SingleList componentId="CitySensor" dataField="category" title="Category" />
                                </div>
                                <div>
                                    <DynamicRangeSlider
                                        componentId="DynamicRangeSensor"
                                        dataField="products.price"
                                        />
                                </div>
                                <div>
                                <RatingsFilter
                                    componentId="ratingsSensor"
                                    dataField="total_unique_products"
                                    data={[
                                        { start: 4, end: 5, label: <I18n t="four_stars_and_up" /> },
                                        { start: 3, end: 5, label: <I18n t="three_stars_and_up" /> },
                                        { start: 2, end: 5, label: <I18n t="two_stars_and_up" /> },
                                        { start: 1, end: 5, label: <I18n t="less_than_one_stars" /> }
                                    ]}
                                    />
                                </div>
                            </div>
                            <div className="col-xs-0 col-md-1"/>
                            <div className="col-xs-10 col-md-8">
                            <ReactiveList
                                size={12}
                                pagination
                                react={{
                                    "and": ["PriceFilter", "SearchFilter", "DynamicRangeSensor", "ratingsSensor"]
                                }}
                                componentId="SearchResult"
                            >
                                {({ data, error, loading}) => (
                                    <ResultCardsWrapper>
                                        {
                                            data.map(item => (
                                                <ResultCard key={item._id}>
                                                    <ResultCard.Image src={item.day_of_week}/>
                                                    <ResultCard.Title
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.customer_last_name
                                                        }}
                                                    />
                                                    <ResultCard.Description>
                                                        <div>
                                                            <div>by {item.customer_first_name}</div>
                                                            <div>
                                                                ({item.total_unique_products} avg)
                                                            </div>
                                                        </div>
                                                        <span>
                                                            Pub {item.order_date}
                                                        </span>
                                                    </ResultCard.Description>
                                                </ResultCard>
                                            ))
                                        }
                                    </ResultCardsWrapper>
                                )}
                            </ReactiveList>
                            <br /><br /><br /><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </HomeLayout>
        </ReactiveBase>
    )
}

export default SearchPage;