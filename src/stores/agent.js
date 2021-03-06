import { observable, action } from 'mobx';
import {data} from '../apis/agent';

export default class Agent {
    @observable agentList = [];

    @action
    getAgentList = async () => {
        try {
            const res = await data;
            this.agentList = res.agents;
        } catch(e) {
            throw e;
        }
    }

    @action
    denyAgent = async (agentId) => {
        try {
            let res = this.agentList.filter(item => item.id === agentId);
            return res;
        } catch(e) {
            throw e;
        }
    }
}
