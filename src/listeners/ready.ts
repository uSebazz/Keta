import { Listener, type ListenerOptions } from '@sapphire/framework'
import { ApplyOptions } from '@sapphire/decorators'

@ApplyOptions<ListenerOptions>( {
	name: 'ready',
	once: true,
} )
export class UserListener extends Listener {
	public run(): void {
		this.container.logger.info( 'Bot ready' )
	}
}
