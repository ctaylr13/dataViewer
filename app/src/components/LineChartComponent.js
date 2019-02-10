import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Line} from 'react-chartjs-2';


export default class LineChartComponent extends Component
{
   constructor(props) {
        super(props);
        this.state = {
            BillData: {},
            SavingsData: {},
            KWHData: {},
            CombinedData: {},
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
            year.reverse();
            month.reverse();
            kwh.reverse();
            bill.reverse();
            savings.reverse();

            var i;
            for(i = 0; i < year.length; i++) {
                date[i] = month[i] + "-" + year[i];
            }

            this.setState({
                // posts: response.data
                BillData: {
                    labels: date,
                    datasets: [
                        {
                            label:'Bill',
                            data: bill ,
                            borderColor:[
                                'rgba(255,105,145,0.6)',
                            ],
                        }

                    ]
                },
                SavingsData: {
                    labels: date,
                    datasets: [
                        {
                            label:'Savings',
                            data: savings ,
                            borderColor:[
                                'rgba(90,178,255,0.6)',
                            ]
                        }

                    ]
                },
                KWHData: {
                    labels: date,
                    datasets: [
                        {
                            label:'KWH',
                            data: kwh ,
                            borderColor:[
                                'rgba(155,100,210,0.6)',
                            ]
                        }
                    ]
                },
                CombinedData: {
                    labels: date,
                    datasets: [
                        {
                            label:'Bill',
                            data: bill ,
                            borderColor:[
                                'rgba(155,100,210,0.6)',
                            ]
                        },
                        {
                            label:'Savings',
                            data: savings ,
                            borderColor:[
                                'rgba(90,178,255,0.6)',
                            ]
                        },

                    ]
                },


            })

            
        })
    }

   render()
   {
      return(
        <div>
            <Line
                data = {this.state.CombinedData}
                options = {{ maintainAspectRatio: true }} />
            <Line
                data = {this.state.BillData}
                options = {{ maintainAspectRatio: true }} />
            <Line
                data = {this.state.SavingsData}
                options = {{ maintainAspectRatio: true }} />
            <Line
                data = {this.state.KWHData}
                options = {{ maintainAspectRatio: true }} />
            
        </div>
      )
   }
}