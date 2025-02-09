import { boolean,pgTable,serial,varchar } from "drizzle-orm/pg-core";

export const Users=pgTable('users',{
    id:serial('id').primaryKey(),
    email:varchar({unique:true},'email').notNull(),
    name:varchar('name').notNull(),
    imageUrl:varchar('imageUrl'),
    Subscription:boolean('subscription').default(false),
})