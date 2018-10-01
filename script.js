$(document).ready(() => {
  $('.js-get').on('click', e => {
    e.preventDefault()
    $.ajax({
      url: 'https://ga-tunr-ajax.herokuapp.com/artists',
      type: 'GET',
      dataType: 'json'
    }).done((response) => {
      console.log(response)
    })
  })

  $('.js-post').on('click', e => {
    e.preventDefault()
  $.ajax({
    url: 'https://ga-tunr-ajax.herokuapp.com/artists',
    type: 'POST',
    dataType: 'json',
    data: {
      artist: {
        name: 'Run the Jewels',
        nationality: 'USA',
    }}
    }).done((response) => {
      console.log(response)
    })  
  })

  $('.js-put').on('click', e => {
    e.preventDefault()
    $.ajax({
      type: 'PUT',
      datatype: 'json',
      url: 'https://ga-tunr-ajax.herokuapp.com/artists/60',
      data: {
        artist: {
          photo_url: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_67920257.jpg'
        }
      }      

    }).done((response) => {
      console.log(response)
    })
  })

  $('.js-delete').on('click', e => {
    e.preventDefault()
    $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: 'https://ga-tunr-ajax.herokuapp.com/artists/23'
    }).done((response) => {
      console.log('Deleted')
    })
  })
})
