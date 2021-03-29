import React, { useState, useEffect } from 'react';

// import './elements.scss'

const CountDown = ({ message, deadline })  => {

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => getCountDownEvent(deadline),1000)
        return function cleanup () {
            clearInterval(interval)
          }
      }, []);


    const getCountDownEvent =(deadline) => {

        const time = Date.parse(deadline) - Date.parse(new Date())

        if(time > 0) {

            const seconds = Math.floor((time/1000)%60)
            const minutes = Math.floor((time/1000/60)%60)
            const hours=Math.floor((time/(1000*60*60))%24)
            const days=Math.floor(time/(1000*60*60*24))
            
            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)
            

        } else
            console.log("Event Has Passed")
    }


    return (
        <div delay={500}>
            <div className='countdown'>
                <div className='countdown__top'>
                    {message}
                </div>
                <div className='countdown__bottom'>
                    <div className='countdown__item'>
                        <div className='countdown__time'>
                            {days}
                        </div>
                        <div className='countdown__tag'>
                            Days
                        </div>
                    </div>
                    <div className='countdown__item'>
                        <div className='countdown__time'>
                            {hours}
                        </div>
                        <div className='countdown__tag'>
                            Hours
                        </div>
                    </div>
                    <div className='countdown__item'>
                        <div className='countdown__time'>
                            {minutes}
                        </div>
                        <div className='countdown__tag'>
                            Mins
                        </div>
                    </div>
                    <div className='countdown__item'>
                        <div className='countdown__time'>
                            {seconds}
                        </div>
                        <div className='countdown__tag'>
                            Secs
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )    

}

export default CountDown


// import React, { Component } from 'react';

// // import './elements.scss'

// class CountDown extends Component {

//     state = {
//         deadlne: 'Dec, 1, 2020',
//         days: '0',
//         hours: '0',
//         minutes: '0',
//         seconds: '0'
//     }

//     getCountDownEvent(deadline) {

//         const time = Date.parse(deadline) - Date.parse(new Date())
//         if(time > 0) {
//             const seconds = Math.floor((time/1000)%60)
//             const minutes = Math.floor((time/1000/60)%60)
//             const hours=Math.floor((time/(1000*60*60))%24)
//             const days=Math.floor(time/(1000*60*60*24)) 
            
//             this.setState({days,hours,minutes,seconds})
//         } else
//             console.log("Event Has Passed")
//     }

//     componentDidMount() {
//         this.interval = setInterval(() => this.getCountDownEvent(this.state.deadlne),1000)
//     } 
    
//     componentWillUnmount() {
//         clearInterval(this.interval)
//     }


//     render() {
//         return (
//             <div delay={500}>
//                 <div className='countdown'>
//                     <div className='countdown__top'>
//                         {this.props.message}
//                     </div>
//                     <div className='countdown__bottom'>
//                         <div className='countdown__item'>
//                             <div className='countdown__time'>
//                                 {this.state.days}
//                             </div>
//                             <div className='countdown__tag'>
//                                 Days
//                             </div>
//                         </div>
//                         <div className='countdown__item'>
//                             <div className='countdown__time'>
//                                 {this.state.hours}
//                             </div>
//                             <div className='countdown__tag'>
//                                 Hours
//                             </div>
//                         </div>
//                         <div className='countdown__item'>
//                             <div className='countdown__time'>
//                                 {this.state.minutes}
//                             </div>
//                             <div className='countdown__tag'>
//                                 Mins
//                             </div>
//                         </div>
//                         <div className='countdown__item'>
//                             <div className='countdown__time'>
//                                 {this.state.seconds}
//                             </div>
//                             <div className='countdown__tag'>
//                                 Secs
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//              </div>
//         )
//     }
// }

// export default CountDown