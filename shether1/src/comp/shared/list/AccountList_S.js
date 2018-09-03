import React from "react";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableRow from "@material-ui/core/TableRow/TableRow";
import Table from "@material-ui/core/Table/Table";
import Paper from "@material-ui/core/Paper/Paper";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableBody from "@material-ui/core/TableBody/TableBody";
//import styles from './list.css';
import {shconfig} from '../../../config'
import {AccountRow} from './AccountRow_D'
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";

export class AccountList extends React.Component<> {
    constructor(props, context) {
        super(props, context);

        this.reloadAccountsState = this.reloadAccountsState.bind(this);
        this.state = {data: [], processing:false};
    }

    componentWillReceiveProps  (){
        this.reloadAccountsState().then(accounts => this.setState({data: accounts, processing:false}));
    }

    reloadAccountsState(): Promise {
        let _that = this;
        return new Promise(function (resolve, reject) {
            _that.setState({processing:true});
            fetch(shconfig.mongo_api_accounts_crud_url)
                .then(response => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            let error = new Error(response.statusText);
                            throw error;
                        }
                    }
                )
                .then(accounts => {
                    return resolve(accounts);
                })
                .catch(reason => {
                    console.log(reason);
                    _that.setState({processing:false});
                    reject(reason);
                });
        });
    }

    componentDidMount(){
        this.reloadAccountsState().then(accounts => this.setState({data: accounts, processing:false}));
    }


    render() {
        return (
            <Paper className={'sketch-paper'}>
                {this.state.processing
                    ?
                    <div style={{flexGrow: 1}}>
                        <LinearProgress />
                    </div>
                    : undefined
                }
                <Table className={'sketch-table'}>
                    <TableHead>
                        {this.props.mode === 'admin'
                            ?
                        <TableRow className={'sketch-row'}>
                            <TableCell className={'sketch-th'} style={{color: '#ffffff'}}>Номер телефона</TableCell>
                            <TableCell className={'sketch-th'} style={{color: '#ffffff'}}>Адрес кошелька</TableCell>
                            <TableCell className={'sketch-th'} style={{color: '#ffffff'}}numeric>Текущий баланс</TableCell>
                            <TableCell className={'sketch-th'} style={{color: '#ffffff'}}>Создан</TableCell>
                        </TableRow>
                            :
                            <TableRow className={'sketch-row'}>
                                <TableCell className={'sketch-th'} style={{color: '#ffffff'}}>Номер телефона</TableCell>
                                <TableCell className={'sketch-th'} style={{color: '#ffffff'}}>Адрес кошелька</TableCell>
                                <TableCell className={'sketch-th'} style={{color: '#ffffff'}} numeric>Текущий баланс</TableCell>
                            </TableRow>}
                    </TableHead>
                    <TableBody>
                        {this.state.data.map(n => {
                            return <AccountRow key={n._id['$oid']} {...n} mode={this.props.mode}/>
                        })}
                    </TableBody>
                </Table>
            </Paper>

        );
    }
}

export default AccountList;