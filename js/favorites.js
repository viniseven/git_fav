export class Favorites {
    constructor(root){
        this.root = document.querySelector(root)
        this.load()

        this.update()
    }

    load(){
        this.entries = [
            {
                login: 'viniseven',
                name: 'Marcus Vinícius',
                public_repos: '76',
                followers: '120000'
            },
            {
                login: 'diego3g',
                name: 'Diego Fernandes',
                public_repos: '40',
                followers: '180000'
            }
        ]
    }
}

export class FavoritesView extends Favorites{
    constructor(root){
        super(root)

        this.tbody = this.root.querySelector('table tbody')
    }

    update(){
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            
            this.tbody.append(row)
        })

        

    }

    createRow(){

        const tr = document.createElement('tr')

        const data = `
            <td class="user">
                <img src="https://github.com/viniseven.png" 
                alt="Foto de perfil do Github">

                <a href="https://github.com/viniseven" target="_blank">
                    <p>Marcus Vinícius</p>
                    <span>viniseven</span>
                </a>
            </td>
            <td class="repositories">
                42
            </td>
            <td class="followers">
                5600
            </td>
            <td>
                <button class="remove">&times;</button>
            </td>    
        `
        tr.innerHTML = data

        return tr
    }

    removeAllTr(){
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }
}