export default function Avatar({image, isNew}){
  return(
    <div className='avatar'>
      <img 
        className='photo'
        src={image}
        alt='avatar'
      />
      {/* isNew = true일때만 span 태그 보여주기 */}
      {isNew && <span className='new'>New</span>}
    </div>
  )
}