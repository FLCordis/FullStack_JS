function group() {
    console.log('Exportando o non-Inline (agrupado)!')
}

export function exportDefault() {
    console.log('Exportando Default non-Inline!')
}

export { group };
export default exportDefault;