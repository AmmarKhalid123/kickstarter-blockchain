import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), 
    '0xC29819fdAEdaae9A53BFce32Ca4bDd3b05d4bf76'
);

export default instance;