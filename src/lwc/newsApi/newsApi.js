import { LightningElement, track, wire } from 'lwc';
import  fetchHeadlines from '@salesforce/apex/NewsAPI.fetchHeadlines';

import userId from '@salesforce/user/Id';

import fetchNews from '@salesforce/apex/NewsAPI.fetchNews';

export default class NewsApi extends LightningElement {

    @track countryCode = 'in';
    @track queryParams = 'blockchain';
    @track headlines;
    @track error;
    @track Id = userId
    /* eslint-disable */

    @wire(fetchHeadlines,{
        Country : '$countryCode'
    })
    wiredHeadlines({ error, data }){
        if(data){
            this.headlines = JSON.parse(data);
            this.error = undefined;
            //console.log(' Top Headlined ',this.totalResults);
        }
        if(error){
            this.error = error;
            this.data = undefined
            console.log(' Error While Fetching the Top Headlines ',error);
        }
    }

    valueChange(event){
        event.preventDefault();
        this.queryParams = event.target.value;
        
    }
    searchNews(){
        fetchNews({
            queryParam : this.queryParams
        })
        .then( (data) => {
            //console.log(' Top Headlined ',data);
            this.headlines = JSON.parse(data);
            this.error = undefined;
            console.log(' Top Headlined ',this.headlines);
        })
        .catch( (error) =>{
            this.error = error;
            this.data = undefined
            console.log(' Error While Fetching the Top Headlines ',error);
        });
    }
}