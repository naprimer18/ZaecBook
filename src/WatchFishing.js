import App from './App';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Fishing extends Component {

  render() {
    return (
      <div className="fishingPhoto" width={600} >
        <h1>Рыбалочка / Fishing </h1>
        	<li><img src="https://i.ytimg.com/vi/QkJBa2n4v_w/maxresdefault.jpg" alt="" width={800} /></li>
        	<li><img src="http://www.gotavastia.fi/sites/default/files/rybalka-v-finlandii-letom.jpg" alt="" width={800}/></li>
        	<li><img src="http://westa.by/i/pages/905/29966.jpg" alt="" width={800}/></li>
        	<li><img src="https://aktualnoe.net/wp-content/uploads/2018/05/rybalka-na-baltijskom-more.jpg" alt="" width={800}/></li>
        	<li><img src="http://vlesu.ru/wp-content/uploads/2015/10/platnaya-rybalka-v-podmoskovye-safari-park-03.jpg" alt=""width={800} /></li>
        	<li><img src="https://liptur.ru/storage/2017/03/15/c8547c04a7f733626df333ccec31b145d108211e_medium.jpg" alt="" width={800}/></li>
        	<li><img src="https://waytomonte.com/img/slider/7/1/6564/a755e62f8e048d2da34f0f012887f899_thumb.jpg" alt="" width={800}/></li>
        	
      </div>
    );
  }
}

export default Fishing;
  