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
            app="db_u7sqbaa.product"
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
                                <SingleList componentId="CitySensor" dataField="category_name" title="Category" />
                                </div>
                                <div>
                                    <DynamicRangeSlider
                                        componentId="DynamicRangeSensor"
                                        dataField="pricing.price"
                                        />
                                </div>
                                <div>
                                <RatingsFilter
                                    componentId="ratingsSensor"
                                    dataField="rate_average"
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
                                                <a href={'/shop/item/' + item._id}>
                                                    <ResultCard key={item._id}>
                                                        <ResultCard.Image src={'http://127.0.0.1:50000/shop' + item.assets.images[0].src}/>
                                                        <ResultCard.Title
                                                            dangerouslySetInnerHTML={{
                                                                __html: item.names.en
                                                            }}
                                                        />
                                                        <ResultCard.Description>
                                                            <div>
                                                                <div style={{color: "#9b9b9b"}}> {item.category_name}</div>
                                                            </div>
                                                            <span>
                                                                <br />
                                                                {item.pricing.price}Birr
                                                            </span>
                                                        </ResultCard.Description>
                                                    </ResultCard>
                                                </a>
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