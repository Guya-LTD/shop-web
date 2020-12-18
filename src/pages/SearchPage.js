import React from 'react';

import { ReactiveBase, DataSearch, ReactiveList, CategorySearch } from '@appbaseio/reactivesearch';

const SearchPage = (props) => {
    return(
        <ReactiveBase
            app="kibana_sample_data_ecommerce"
            url="http://127.0.0.1:50000/"
        >
        // other components will go here.
        <div>Hello ReactiveSearch!</div>
        <CategorySearch
            componentId="searchbox"
            dataField="customer_full_name"
            categoryField="email"
            placeholder="Search for cars"
        />
        
        <ReactiveList
            componentId="SearchResult"
            react={{
                and: ['customer_first_name', 'customer_last_name'],
            }}
            renderItem={res => <div>{res.customer_full_name}</div>}
        />
    </ReactiveBase>
    )
}

export default SearchPage;