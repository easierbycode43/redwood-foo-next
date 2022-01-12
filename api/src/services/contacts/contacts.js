import { UserInputError } from '@redwoodjs/graphql-server'
import { db } from 'src/lib/db'

const validate = (input) => {
  if (input.email && !input.email.match(/^@]+@[^.]+\..+/)) {
    throw new UserInputError("Can't create contact", {
      messages: {
        email: ["doesn't look right"],
      },
    })
  }
}

export const contacts = () => {
  return db.contact.findMany()
}

export const createContact = ({ input }) => {
  validate(input)
  return db.contact.create({ data: input })
}
