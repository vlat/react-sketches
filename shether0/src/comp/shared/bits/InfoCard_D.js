import React from "react";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import Typography from "@material-ui/core/Typography/Typography";
import CardContent from "@material-ui/core/CardContent/CardContent";


export class InfoCard extends React.Component<> {
    render() {
        return (
            <Card className="card-unit">
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.count}
                        </Typography>
                        <Typography component="p">{this.props.title}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}
