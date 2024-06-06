import { Client } from '@hubspot/api-client';

export const handler = async (event) => {
    const {dealId, prize} = JSON.parse(event.body)
    const client = new Client({accessToken: process.env.HUBSPOT_API_KEY})
    const deal = {
        properties: {
            dealname: `${prize} gewonnen!`,
        }
    }
    const updateDealResponse = await client.crm.deals.basicApi.update(dealId, deal)
    return {
        statusCode: 200,
        body: JSON.stringify(updateDealResponse)
    }
}
