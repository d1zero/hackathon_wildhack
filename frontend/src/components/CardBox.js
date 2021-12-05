import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardBox = ({ styles, item }) => {
    return (
        <Card sx={{ maxWidth: 345 }} style={styles}>
            <CardMedia
                component="img"
                height="140"
                image={item.photo_url}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.preview_text
                        .replaceAll('<p>', '')
                        .replaceAll('</p>', '')
                        .replaceAll('&laquo;', '')
                        .replaceAll('&raquo;', '')}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Вся новость</Button>
            </CardActions>
        </Card>
    );
};

export default CardBox;
