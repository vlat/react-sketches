import React from "react";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import Typography from "@material-ui/core/Typography/Typography";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";


export class InfoCard extends React.Component<> {
    render() {
        let imgUrl = 'https://picsum.photos/' + this.props.imageWidth + '/200/?random';
        return (
            <Card className="sketch-card">
                <CardActionArea>
                    <CardContent>
                        <CardMedia
                            className={'sketch-media'}
                            image={imgUrl}
                            title="Участников форума"
                        />
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.count ? this.props.count : '--'}
                        </Typography>
                        <Typography component="p">{this.props.title}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}
