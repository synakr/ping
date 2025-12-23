declare global {
	namespace App {
		interface Locals {
			user: User | any; //User is a TypeScript type provided by Supabase.
		}
	}
}

export {};
