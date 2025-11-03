import {format} from 'date-fns' //import date format
import './App.css' // import style

export default function CurrentTime() { //display time
  return (
    <body>                      
      <p>{format ( new Date(), 'hh:mm:ssaaa EEEE, MMMM do Y')}</p>
      </body>
  )
}
