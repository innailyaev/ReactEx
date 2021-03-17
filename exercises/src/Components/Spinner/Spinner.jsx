import react from 'react';
import "./Spinner.css"

//class
class Spinner extends react.Component { 
    
    constructor(props) {
        super();
        this.state={
            isShow:false,
            minutes: 1,
            seconds: 0
        }
    }

   
    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state;
    
            if (seconds > 0) {
                this.setState(() => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval);
                    this.setState({ isShow: true });
                } else {
                    this.setState(() => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    render () {
        const { minutes, seconds } = this.state;
        return (
            <div>
                { minutes === 0 && seconds === 0 ? this.componentWillUnmount: 
                <h1 className="timer">Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>}
                <div className="spinner"></div>
            </div>   
    )}
}

export default Spinner;