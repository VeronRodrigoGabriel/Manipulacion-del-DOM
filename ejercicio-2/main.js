let tarjetas = [{img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" ,id: 1, title: "Javascript", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit tempore, explicabo quibusdam minus similique! Nobis at eos autem harum exercitationem, unde saepe quam temporibus eius recusandae ex! Omnis, perspiciatis?"},
                {img: "https://img.freepik.com/premium-psd/3d-render-illustration-python-logo-isolated-premium-psd_454921-104.jpg?w=740" ,id: 2, title: "Python", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit tempore, explicabo quibusdam minus similique! Nobis at eos autem harum exercitationem, unde saepe quam temporibus eius recusandae ex! Omnis, perspiciatis?"},
                {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png" ,id: 2, title: "Python", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit tempore, explicabo quibusdam minus similique! Nobis at eos autem harum exercitationem, unde saepe quam temporibus eius recusandae ex! Omnis, perspiciatis?"},
                {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png" ,id: 2, title: "Python", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit tempore, explicabo quibusdam minus similique! Nobis at eos autem harum exercitationem, unde saepe quam temporibus eius recusandae ex! Omnis, perspiciatis?"}]
let cards = document.getElementById('card')

tarjetas.map((x) =>{
    cards.innerHTML += `
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card">
        <div class="card-body">
        <img class="container" src="${x.img}" alt="">
          <h5 class="card-title">${x.title}</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `;
})