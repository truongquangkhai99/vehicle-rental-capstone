// @ts-nocheck
import React ,{ Component } from 'react'
import '../styles/pages/homeitworkpage.scss'
import blogApi from '../api/blogApi'
class HowItWorkPage extends Component {
    constructor(props){
        super(props)
        this.state={
            employee:[]
        }
    }
    componentDidMount(){
        blogApi.getBlog().then((res) => {
            this.setState({ employee: res.data});
        });
    }
    
    render(){
        return (
            <div>
                {this.state.employee.map(em =>
                    <div>
                        <h1>{em.title}</h1>
                        <h2>{em.content}</h2>
                    </div>

                    )}
            </div>
        );
    }
}
 export default HowItWorkPage