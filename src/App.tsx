import { useState } from 'react'
import './App.css'
import { Label } from './components/Label'
import DefaultTextField from './components/textfields/DefaultTextField'


function App() {
  const [isError, setIsError] = useState(false);

  return (
    <>
      <Label htmlFor='email'>이메일</Label>
      <DefaultTextField
        id="email"
        placeholder="이메일을 입력해주세요"
        type="text"
        value=""
        isError={isError}
        errorMessage="다시 시도해주세요" 
        onChange={() => { }}
        onIconClick={() => { }}

      />
      <div className='mt-4'/>
      <Label htmlFor='email'>주소</Label>
      <DefaultTextField
        id="email"
        placeholder="주소를 입력해주세요"
        type="text"
        value=""
        isError={isError}
        errorMessage="다시 시도해주세요" 
        onChange={() => { }}
        onIconClick={() => { }}
      />
      <button onClick={() => setIsError((prev) => !prev) }>에러 토글</button>
    </>
  )
}

export default App
