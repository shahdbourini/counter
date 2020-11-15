import React from "react";
import './App.css'

class App extends React.Component {
    state = {

        counters: [0, 0, 0,0 ],
        number:0,
        flag:[0,0,0,0],
    
    };


    incr = (i) => {

        this.setState(({ counters ,number,flag}) => {
            const newCount = [...counters];
            newCount[i] = newCount[i] + 1;
            for (var j = 0; j < flag.length; j++) {
                 if(flag[i]===j && flag[i]===0){
                    number=number+1;   
                    flag[i]=1; 
            }}
         
            return { counters: newCount, number:number,flag };
        });

    
    }


    decr = (i) => {

        this.setState(({ counters }) => {
            const newCount = [...counters];
            newCount[i] = newCount[i] - 1;
            return { counters: newCount };
        });

     
    }

    refresh = () => {

        this.setState(({ counters,flag,number}) => {
            counters= [0, 0, 0,0];
            number=0;
            flag=[0,0,0,0];
        
       
            return { counters,flag, number };
        });

     
    }

    render() {

        const { counters,number } = this.state;

        return (
            <div>
                <header>
                    <i className="fa fa-shopping-cart cart" aria-hidden="true"></i>
        <span className="num">{number}</span> items
     </header>

                <div>
                    <button className="refresh">
                        <i className="fa fa-refresh " aria-hidden="true" onClick={this.refresh} ></i>
                    </button>

                </div>
                {counters.map((counter, index) => (

                    <Counter2
                        key={index}
                        index={index}
                        addValue={index + 1}
                        counter={counter}
                        incr={this.incr}
                        decr={this.decr}
                    />
                ))}
            </div>
        );


    }

}

function Counter2(props) {
    const { counter, incr, index, decr } = props;

    return (

        <>

            <div className="form-inline form">
                <div className="square  mx-sm-3 mb-2">{counter}</div>
                <button type="submit" onClick={() => incr(index)} className="btn btn-info btn-sm mr-1">
                <i className="fa fa-plus-circle" aria-hidden="true"></i>

                </button>
                <button type="submit" onClick={() => decr(index)} className="btn btn-secondary btn-sm">
                <i className="fa fa-minus-circle" aria-hidden="true"></i>

                </button>
            </div>



        </>
    );
}

export default App;
