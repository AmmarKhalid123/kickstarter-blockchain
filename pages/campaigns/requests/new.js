import React, { useState } from 'react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import { Button, Form, Input, Message } from 'semantic-ui-react';

export default function RequestNew({address}) {
    const [value, setValue] = useState('');
    const [desc, setDesc] = useState('');
    const [recip, setRec] = useState('');
    const [loading, setLoading] = useState(false);
    const [errMess, setErr] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const campaign = Campaign(address);
        setLoading(true);
        setErr('');
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(desc, web3.utils.toWei(value, 'ether'), recip)
            .send({ from: accounts[0]})

            Router.pushRoute(`/campaigns/${address}/requests`)
        }catch (err){
            setErr(err.message);
        }
        setLoading(false);
    }


    return(
        <Layout>
            <Link route={`/campaigns/${address}/requests`}>
                <a>Back</a>
            </Link>
            <h3>Create a Request</h3>

            <Form onSubmit={onSubmit} error={!!errMess}>
                <Form.Field>
                    <label>Description</label>
                    <Input 
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Value in Ether</label>
                    <Input 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    
                    />
                
                </Form.Field>

                <Form.Field>
                    <label>Recipient</label>
                    <Input 
                        value={recip}
                        onChange={e => setRec(e.target.value)}                
                    />
                
                </Form.Field>

                <Message error header="Oops!" content={errMess} />

                <Button loading={loading} primary> Create!</Button>
            </Form>
        </Layout>
    );
}
RequestNew.getInitialProps = async (props) => {
    const { address } = props.query;

    return { address }
}