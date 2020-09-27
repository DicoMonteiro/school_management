module.exports = {

    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) {
            age = age -1
        }

        return age
    },
    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)
        
        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },
    graduation: function(escolaridade) {
        switch (escolaridade) {
            case 'doutorado':
                return 'Doutorado'
            case 'mestrado':
                return 'Mestrado'
            case 'mba':
                return 'Especialização'
            case 'superior':
                return 'Ensino Superior Completo'
            default:
                return 'Ensino Médio Completo'
        }
    },

    grade: function(ano) {
        switch (ano) {
            case 'quito_ano':
                return '5˚ Ano do Ensino Fundamental'
            case 'sexto_ano':
                return '6˚ Ano do Ensino Fundamental'
            case 'setimo_ano':
                return '7˚ Ano do Ensino Fundamental'
            case 'oitavo_ano':
                return '8˚ Ano do Ensino Fundamental'
            case 'nono_ano':
                return '9˚ Ano do Ensino Fundamental'
            case 'primeiro_ano':
                return '1˚ Ano do Ensino Médio'
            case 'segundo_ano':
                return '2˚ Ano do Ensino Médio'
            default:
                return '3˚ Ano do Ensino Médio'
        }
    }
}