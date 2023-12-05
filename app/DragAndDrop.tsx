'use client'
import { useState } from 'react'

import { Dropzone, ExtFile, FileMosaic } from '@files-ui/react'

export default function DragAndDrop({ transImageformToCode }: { transImageformToCode: (file: File) => void }) {
	const [files, setFiles] = useState<ExtFile[]>([])

	const updateFiles = (files: ExtFile[]) => {
		const file = files[0].file
		if (file != null) transImageformToCode(file)
	}

	return (
		<Dropzone
			header={false}
			footer={false}
			maxFiles={1}
			label="arrastra aquí tu captura de imagen"
			accept="image/*"
			onChange={updateFiles}
		 />

	)
}
