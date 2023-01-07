import React from 'react'
import Card from '../UI/Card'
import classes from './QuoteBox.module.css';

const QuoteBox = ({quotes}) => {
  return (
    <Card>
        <div className={classes.quoteBox}>
            {quotes.body} 
        </div>
        <div className={classes.authorBox}>
            {quotes.author}
        </div>
    </Card>
  )
}

export default QuoteBox