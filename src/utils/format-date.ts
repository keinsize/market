export const formatDate = (date: string) =>
	new Date(date).toLocaleDateString('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

export const getDate = (deliveryTime: number) => {
	const date = new Date()
	date.setDate(date.getDate() + deliveryTime)
	return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
}
