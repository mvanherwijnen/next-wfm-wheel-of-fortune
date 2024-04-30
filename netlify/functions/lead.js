import { Client } from '@hubspot/api-client';

export const handler = async (event) => {
    const client = new Client({accessToken: Netlify.env("HUBSPOT_API_KEY")})
    const contact = {
        properties: {
            name: "Henk",
            email: "henk405@hotmail.com"
        }
    }
    const deal = {
        properties: {
            amount: 1945
        }
    }
    const createContactResponse = await client.crm.contacts.basicApi.create(contact)
    const createDealResponse = await client.crm.deals.basicApi.create(deal)
    await client.crm.associations.v4.basicApi.create(
        'deals',
        createDealResponse.id,
        'contacts',
        createContactResponse.id,
        [
            {
                "associationCategory": "HUBSPOT_DEFINED",
                "associationTypeId": AssociationTypes.dealToContact
                // AssociationTypes contains the most popular HubSpot defined association types
            }
        ]
    )
    return {
        statusCode: 200,
        body: JSON.stringify(event)
    }
}
