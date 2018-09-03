import React from 'react';
import AccountList from "../shared/list/AccountList_S";
import {NewAccountDlg} from "./NewAccountDlg";
import {shconfig} from "../../config";
import * as ethers from "ethers";
import moment from "moment";

export class ManageAccountsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.createWallet = this.createWallet.bind(this);
        this.state = {lastUpdate: 0}
    }

    createWallet(newWallet): Promise {
        let _that = this;
        if (newWallet) {

            const provider = ethers.providers.getDefaultProvider();

            return new Promise(function (resolve, reject) {
                ethers.Wallet.fromBrainWallet(newWallet.username, newWallet.password).then(function(wallet) {
                    console.log('given address');
                    console.log(wallet.address);

                    provider.getBalance(wallet.address).then(function(balance) {
                        //const etherString = ethers.utils.formatEther(balance);
                        const currtime = moment().format('YYYY-MM-DD HH:mm:ss');
                        const savedBalance = newWallet.balance;
                        const account = {
                            username: newWallet.username,
                            password: newWallet.password,
                            address: wallet.address,
                            created: currtime,
                            balance: savedBalance
                        };

                        fetch(shconfig.mongo_api_accounts_crud_url, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify( account )
                        })
                            .then(response => {
                                    if (response.ok) {
                                        _that.setState({lastUpdate: _that.state.lastUpdate ? _that.state.lastUpdate + 1 : 0});
                                        return resolve(true);
                                    } else {
                                        let error = new Error(response.statusText);
                                        throw error;
                                    }
                                }
                            )
                            .catch(reason => {
                                console.log(reason);
                                reject(reason);
                            });
                    });
                });

            });
        }
    };

    render() {
        return (
            <div>
                <div><NewAccountDlg handleCreate={this.createWallet}/></div>
                <AccountList mode={'admin'} lastUpdate={this.state.lastUpdate}/>
                {/*<input type="submit"*/}
                {/*value="Add Course"*/}
                {/*className="btn btn-primary"*/}
                {/*onClick={this.redirectToAddCoursePage}/>*/}

                {/*<CourseList courses={this.props.courses}/>*/}
            </div>
        );
    }
}

