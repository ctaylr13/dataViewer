import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';


export default class BarChartComponent extends Component
{
   constructor(props) {
        super(props);
        this.state = {
            BillData: {},
            SavingsData: {},
            KWHData: {}
        }
  }

  componentDidMount(){
        axios.get('http://localhost:8080/posts')
            .then(response => {
            const utility = response.data;
            let year = [];
            let month = [];
            let kwh = [];
            let bill = [];
            let savings = [];
            let date = [];

            utility.forEach(element => {
                year.push(element.year);
                month.push(element.month);
                kwh.push(element.kwh);
                bill.push(element.bill);
                savings.push(element.savings);
            });
            year.reverse().toString();
            month.reverse().toString();
            kwh.reverse();
            bill.reverse();
            savings.reverse();

            var i;
            for(i = 0; i < year.length; i++) {
                date[i] = month[i] + "-" + year[i];
            }

            this.setState({
                BillData: {
                    labels: date,
                    datasets: [
                        {
                            label:'Bill Total per Month',
                            data: bill ,
                            backgroundColor:[
                                'rgba(255,105,145,0.6)',
                                'rgba(155,100,210,0.6)',
                                'rgba(90,178,255,0.6)',
                                'rgba(240,134,67,0.6)',
                                'rgba(120,120,120,0.6)',
                                'rgba(250,55,197,0.6)'
                            ]
                        }
                    ]
                },
                SavingsData: {
                    labels: date,
                    datasets: [
                        {
                            label:'Savings Total per Month',
                            data: savings,
                            backgroundColor:[
                                'rgba(255,105,145,0.6)',
                                'rgba(155,100,210,0.6)',
                                'rgba(90,178,255,0.6)',
                                'rgba(240,134,67,0.6)',
                                'rgba(120,120,120,0.6)',
                                'rgba(250,55,197,0.6)'
                            ]
                        }
                    ]
                },
                KWHData: {
                    labels: date,
                    datasets: [
                        {
                            label:'KWH Total per Month',
                            data: kwh,
                            backgroundColor:[
                                'rgba(255,105,145,0.6)',
                                'rgba(155,100,210,0.6)',
                                'rgba(90,178,255,0.6)',
                                'rgba(240,134,67,0.6)',
                                'rgba(120,120,120,0.6)',
                                'rgba(250,55,197,0.6)'
                            ]
                        }
                    ]
                }

            })
            
        })
    }

   render()
   {
      return(
        <div>
            <Bar
                data = {this.state.BillData}
                options = {{ maintainAspectRatio: true }} />
            <Bar
                data = {this.state.SavingsData}
                options = {{ maintainAspectRatio: true }} />
            <Bar
                data = {this.state.KWHData}
                options = {{ maintainAspectRatio: true }} />
        </div>
      )
   }
}