import { Client } from '@hubspot/api-client';

export const handler = async (event) => {
    const client = new Client({accessToken: process.env.HUBSPOT_API_KEY})
    const firstname = "Henk";
    const contact = {
        properties: {
            firstname,
            email: "henk405@hotmail.com"
        }
    }
    const deal = {
        properties: {
            name: `Rad van fortuin van ${firstname}`,
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
            }
        ]
    )
    return {
        statusCode: 200,
        body: JSON.stringify(event)
    }
}
