/*
  Copyright 2017~2022 The Bottos Authors
  This file is part of the Bottos Data Exchange Client
  Created by Developers Team of Bottos.

  This program is free software: you can distribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with Bottos. If not, see <http://www.gnu.org/licenses/>.
*/
import React,{PureComponent} from 'react'
import { Tabs, Input, Ico,Button,Select } from 'antd';
const TabPane = Tabs.TabPane;
import './styles.less';

function callback(key) {
    console.log(key)
}

const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export default class BTAccount extends PureComponent{
    constructor(props){
        super(props)

        // this.state = {
        //     address:''
        // }
    }

    render(){
        return(
            <div className="assetTagPage">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="个人资料" key="1">
                        <div className="personalInformation">
                            <div className="UserName">
                                <span>username:</span>
                                <Input style={{width:"80px"}} defaultValue="Jack" />
                                <Button>modify</Button>
                            </div>
                            <div className="realName">
                                <span>realName:</span>
                                <span>Tom</span>
                            </div>
                            <div className="accountType">
                                <span>accountType:</span>
                                    <Select defaultValue="provider" style={{ width:"120px", marginTop:"-30px"}} onChange={handleChange}>
                                        <Option value="demandSide">Demand side</Option>
                                        <Option value="provider">Provider</Option>
                                        <Option value="both">both</Option>
                                    </Select>
                                <Button>modify</Button>
                            </div>
                            <div className="phoneNumber">
                                <span>phoneNumber:</span>
                                <Input style={{width:"120px"}} defaultValue="13761234905" />
                                <Button>modify</Button>
                            </div>
                            <div className="mailBox">
                                <span>mailBox:</span>
                                <Input style={{width:"200px"}} defaultValue="cnyuanjia@gmail.com" />
                                <Button>modify</Button>
                            </div>
                            <div className="address">
                                <span>address:</span>
                                <Input style={{width:"250px"}} defaultValue="" />
                                <Button>modify</Button>
                            </div>
                            <div className="submit" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Button>submit</Button>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="公司资料" key="2">
                        <div className="enterpriseInformation">
                            <div className="UserName">
                                <span>username:</span>
                                <Input style={{width:"80px"}} defaultValue="Jack" />
                                <Button>modify</Button>
                            </div>
                            <div className="enterpriseName">
                                <span>enterpriseName:</span>
                                <span>enterpriseName</span>
                            </div>
                            <div className="accountType">
                                <span>accountType:</span>
                                <Select defaultValue="provider" style={{ width:"120px", marginTop:"-30px"}} onChange={handleChange}>
                                    <Option value="demandSide">Demand side</Option>
                                    <Option value="provider">Provider</Option>
                                    <Option value="both">both</Option>
                                </Select>
                                <Button>modify</Button>
                            </div>
                            <div className="phoneNumber">
                                <span>enterprisePhoneNumber:</span>
                                <Input style={{width:"120px"}} defaultValue="888-888-888" />
                                <Button>modify</Button>
                            </div>
                            <div className="mailBox">
                                <span>enterpriseMailBox:</span>
                                <Input style={{width:"200px"}} defaultValue="cn@gmail.com" />
                                <Button>modify</Button>
                            </div>
                            <div className="address">
                                <span>enterpriseAddress:</span>
                                {<Input style={{width:"250px"}} defaultValue="google" /*onChange={(e)=>this.setState({address:e.target.value})}*/ />}
                                <Button>modify</Button>
                            </div>
                            <div className="code">
                                <span>组织机构代码:</span>
                                <span>000</span>
                            </div>
                            <div className="submit">
                                <Button>submit</Button>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}




