import { Client, AssociationTypes } from '@hubspot/api-client';

export const handler = async (event) => {
    const {name, email} = JSON.parse(event.body)
    const client = new Client({accessToken: process.env.HUBSPOT_API_KEY})
    const contact = {
        properties: {
            firstname: name,
            email
        }
    }
    const deal = {
        properties: {
            dealname: `Rad van fortuin van ${name}`,
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
                associationCategory: "HUBSPOT_DEFINED",
                associationTypeId: AssociationTypes.dealToContact
            }
        ]
    )
    return {
        statusCode: 200,
        body: JSON.stringify(event)
    }
}
