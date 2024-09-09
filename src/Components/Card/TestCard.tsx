import { Card, CardContent, CardActions, Typography, CardHeader, IconButton, Chip } from '@mui/material'
import { ICardContent } from '../../Models/CardContent';
import { ITagModel } from '../../Models/TagModel';
import BugReportIcon from '@mui/icons-material/BugReport';
import './TestCard.css'
import { useEffect } from 'react';

interface ICardComponentProps {
    cardContent: ICardContent
    where: string
}

export default function TestCard({ cardContent, where }: ICardComponentProps) {
    useEffect(() => {
        console.log('ladder', where)
    })
    return (
        <Card className={`card_container-${where}`} >
            <CardHeader className='card_header'
                action={
                    <IconButton>
                        <BugReportIcon color={'action'} />
                    </IconButton>
                }
                title={cardContent.Title || ''}
                subheader={cardContent.SubTitle || ''}
            />
            <CardContent className='card_content'>
                <>
                    {cardContent.PeopleResponsible.map((people: string, _) => 
                        <Typography >{people}</Typography>
                    )}
                    
                </>
            </CardContent>
            <CardActions className='card_actions'>
                <>
                    {cardContent.Tags.map((tag: ITagModel, _) =>
                     <Chip label={tag.Name} size='small' variant="outlined"/>
                    )}
                </>
            </CardActions>
        </Card>
    );
}