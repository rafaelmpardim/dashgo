import { ActiveModelSerializer, createServer, Factory, Model, Response } from 'miragejs'
import { faker } from '@faker-js/faker'

type User = {
  created_at: string
  email: string
  name: string
}

export function makeServer() {
	const server = createServer({
		serializers: {
			application: ActiveModelSerializer,
		},

		models: {
			user: Model.extend<Partial<User>>({})
		},

		factories: {
			user: Factory.extend({
				createdAt() {
					return faker.date.recent(10)
				},
				email() {
					return faker.internet.email().toLowerCase()
				},
				name() {
					return faker.name.fullName()
				}
			})
		},

		seeds(server) {
			server.createList('user', 200)
		},

		routes() {
			this.namespace = 'api'
			this.timing = 750

			this.get('/users', function (schema, request) {
				const { page = 1, per_page = 10 } = request.queryParams

				const total = schema.all('user').length

				const pageStart = (Number(page) - 1) * Number(per_page)
				const pageEnd = pageStart + Number(per_page)

				const users = this.serialize(schema.all('user'))
					.users.slice(pageStart, pageEnd)

				return new Response(
					200,
					{ 'x-total-count': String(total) },
					{ users }
				)
			})

			this.get('/users/:id')
			this.post('/users')
		
			this.namespace = ''
			this.passthrough()
		},
	})

	return server
}