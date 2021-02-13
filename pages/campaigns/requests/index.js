import React from 'react';
import Layout from '../../../components/Layout';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

function RequestIndex({ address, requests, approversCount, requestCount }){
    const { Header, Row, HeaderCell, Body } = Table;

    const renderRows = () => {
        return requests.map((r, i) => {
            return <RequestRow request={r} key={i} id={i} address={address} approversCount={approversCount} />
        })
    }

    return(
        <Layout>
            <h3>Request List</h3>
            <Link route={`/campaigns/${address}/requests/new`}>
                <a>
                    <Button primary floated="right" 
                        style={{ marginBottom: 10 }}>
                            Add Request
                        </Button>
                </a>
            </Link>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>Approval</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>
                <Body>
                    {renderRows()}
                </Body>
            </Table>
            <div>Found {requestCount} requests.</div>
        </Layout>
    );
}

RequestIndex.getInitialProps = async (props) => {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestsCount().call();

    const requests = await Promise.all(
        Array(parseInt(requestCount)).fill().map((e, i) => {
            return campaign.methods.requests(i).call();
        })
    )

    const approversCount = await campaign.methods.approversCount().call();
    return { address, requests, requestCount, approversCount };
}

export default RequestIndex;