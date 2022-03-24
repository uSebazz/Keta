import '@sapphire/plugin-logger/register'
import { env, UserClient } from './lib'
import { container } from '@sapphire/framework';

( async () => {
	const client = new UserClient()
	try {
		await client.login( env.DISCORD_TOKEN )
	} catch ( e ) {
		container.logger.error( e )
		client.destroy()
		process.exit( 1 )
	}
} )().catch( e => container.logger.error( e ) )
