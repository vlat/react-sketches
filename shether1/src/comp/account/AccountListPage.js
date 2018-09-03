import React from 'react';
import AccountList from "../shared/list/AccountList_S";
import {InfoCard} from "../shared/bits/InfoCard_D";
import Typography from "@material-ui/core/Typography/Typography";

export class AccountListPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.searchProcess = this.searchProcess.bind(this);
    }

    searchProcess = () => {

    };


    render() {
        return (
            <div>
                <Typography variant="subheading" align="center">
                    Список счетов
                </Typography>

                <div className="cards">
                    <InfoCard count={5000} title={'участников форума'}/>
                    <InfoCard count={2000} title={'кошельков Ethereum'}/>
                    <InfoCard count={500} title={'книг в магазинах Сбербанка'}/>
                </div>
                <AccountList mode={'short'}/>
            </div>
        );
    }
}

