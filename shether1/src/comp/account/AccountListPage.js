import React from 'react';
import AccountList from "../shared/list/AccountList_S";
import {InfoCard} from "../shared/bits/InfoCard_D";
import Typography from "@material-ui/core/Typography/Typography";
import {shconfig} from "../../config";

export class AccountListPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.searchProcess = this.searchProcess.bind(this);
        this.estimateWallets= this.estimateWallets.bind(this);
        this.state = {walCount: undefined}
    }

    searchProcess = () => {

    };

    componentDidMount(){
        this.estimateWallets().then(c => this.setState({walCount: c}));
   }

    estimateWallets(): Promise {
        let _that = this;
        return new Promise(function (resolve, reject) {
            _that.setState({processing:true});
            fetch(shconfig.mongo_api_accounts_crud_url + '&c=true')
                .then(response => {
                        if (response.ok) {
                            return response.text();
                        } else {
                            let error = new Error(response.statusText);
                            throw error;
                        }
                    }
                )
                .then(c => {
                    return resolve(c);
                })
                .catch(reason => {
                    console.log(reason);
                    _that.setState({processing:false});
                    reject(reason);
                });
        });
    }

    render() {

        return (
            <div>
                <Typography variant="subheading" align="center">
                    Список счетов
                </Typography>

                <div className="cards">
                    <InfoCard count={5000} imageWidth={501} title={'участников форума'}/>
                    <InfoCard count={this.state.walCount} imageWidth={502} title={'кошельков Ethereum'}/>
                    <InfoCard count={500} imageWidth={503} title={'книг в магазинах Сбербанка'}/>
                </div>
                <AccountList mode={'short'}/>
            </div>
        );
    }
}

