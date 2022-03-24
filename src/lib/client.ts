import { LogLevel, SapphireClient } from '@sapphire/framework'
import { env } from './env'
import { Intents } from 'discord.js'

export class UserClient extends SapphireClient {
	public constructor() {
		super( {
			defaultPrefix: env.DISCORD_PREFIX ?? '!',
			intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ],
			loadDefaultErrorListeners: true,
			logger: {
				level: LogLevel.Debug,
			},
		} )
	}

	public async start(): Promise<void> {
		await this.login( env.DISCORD_TOKEN )
	}
}
