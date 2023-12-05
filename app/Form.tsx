'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

function Form({ transformUrltoCode }: { transformUrltoCode: (url: string) => void }) {
	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={(e) => {
				e.preventDefault()
				const form = e.currentTarget as HTMLFormElement
				const url = form.elements.namedItem('url') as HTMLInputElement
        console.log(url.value)  
				transformUrltoCode(url.value)
			}}
		>
			<Label htmlFor="url">Introduce el Url de la inmagen:</Label>
			<Input name="url" id="url" type="url" placeholder="https://tu-screenshot/image-jpg"></Input>
			<Button>Generar codigo de la imagen</Button>
		</form>
	)
}

export default Form
