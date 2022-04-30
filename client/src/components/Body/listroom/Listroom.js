

function Listroom() {

    return (
        <div className="listroom" style={{ marginTop: '50px' }}>
            <h2>List of rooms for rent</h2>
            <div className="row mt-4" style={{border:"1px solid rgba(0,0,0,.125)",padding:'15px',borderRadius: '5px',boxShadow: '1px 1px 2px #ccc'}}>
                <div className="col-sm listroom__room d-flex">
                    <div className="listroom__room__img" style={{ marginRight: '20px' }}><img src='./img/images.jpg' /></div>
                    <div className="listroom__room__info">
                        <p style={{ color: '#E13427' }}>PHÒNG TRỌ CAO CẤP QUẬN 7,HUỲNH TẤN PHÁT, BÙI VĂN BA, GẦN ĐH TÔN ĐỨC THẮNG</p>
                        <div className="d-flex justify-content-between">
                            <p style={{ fontWeight: 700, color: '#16c784' }}>4.7 triệu/tháng</p>
                            <p>30m2</p>
                            <p>Quan Nam Tu Niem</p>
                        </div>
                        <p style={{
                            margin: '10px 0 0',
                            color: '#8a8d91',

                        }}>TƯNG BỪNG KHAI TRƯƠNG CĂN HỘ CỰC XINH CHỈ 4tr7Phòng mới xây dạng chung cư mini, có gác lửng cao không đụng đầu, Diện tích phòng: 18-26 m2 Phòng thông…</p>
                        <div className="d-flex justify-content-between">
                            <div className="post-author"><img src='./img/anhdd.jpg' style={{
                                width: '30px',
                                height: '30px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                marginRight: '5px'
                            }} /> Le Trung Hai</div>
                            <div>
                                <button style={{
                                    padding: '3px 7px',
                                    borderRadius: '5px',
                                    border: '1px solid #37c',
                                    backgroundColor: '#37c',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}>Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4" style={{border:"1px solid rgba(0,0,0,.125)",padding:'15px',borderRadius: '5px',boxShadow: '1px 1px 2px #ccc'}}>
                <div className="col-sm listroom__room d-flex">
                    <div className="listroom__room__img" style={{ marginRight: '20px' }}><img src='./img/images.jpg' /></div>
                    <div className="listroom__room__info">
                        <p style={{ color: '#E13427' }}>PHÒNG TRỌ CAO CẤP QUẬN 7,HUỲNH TẤN PHÁT, BÙI VĂN BA, GẦN ĐH TÔN ĐỨC THẮNG</p>
                        <div className="d-flex justify-content-between">
                            <p style={{ fontWeight: 700, color: '#16c784' }}>4.7 triệu/tháng</p>
                            <p>30m2</p>
                            <p>Quan Nam Tu Niem</p>
                        </div>
                        <p style={{
                            margin: '10px 0 0',
                            color: '#8a8d91',

                        }}>TƯNG BỪNG KHAI TRƯƠNG CĂN HỘ CỰC XINH CHỈ 4tr7Phòng mới xây dạng chung cư mini, có gác lửng cao không đụng đầu, Diện tích phòng: 18-26 m2 Phòng thông…</p>
                        <div className="d-flex justify-content-between">
                            <div className="post-author"><img src='./img/anhdd.jpg' style={{
                                width: '30px',
                                height: '30px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                marginRight: '5px'
                            }} /> Le Trung Hai</div>
                            <div>
                                <button style={{
                                    padding: '3px 7px',
                                    borderRadius: '5px',
                                    border: '1px solid #37c',
                                    backgroundColor: '#37c',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}>Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4" style={{border:"1px solid rgba(0,0,0,.125)",padding:'15px',borderRadius: '5px',boxShadow: '1px 1px 2px #ccc'}}>
                <div className="col-sm listroom__room d-flex">
                    <div className="listroom__room__img" style={{ marginRight: '20px' }}><img src='./img/images.jpg' /></div>
                    <div className="listroom__room__info">
                        <p style={{ color: '#E13427' }}>PHÒNG TRỌ CAO CẤP QUẬN 7,HUỲNH TẤN PHÁT, BÙI VĂN BA, GẦN ĐH TÔN ĐỨC THẮNG</p>
                        <div className="d-flex justify-content-between">
                            <p style={{ fontWeight: 700, color: '#16c784' }}>4.7 triệu/tháng</p>
                            <p>30m2</p>
                            <p>Quan Nam Tu Niem</p>
                        </div>
                        <p style={{
                            margin: '10px 0 0',
                            color: '#8a8d91',

                        }}>TƯNG BỪNG KHAI TRƯƠNG CĂN HỘ CỰC XINH CHỈ 4tr7Phòng mới xây dạng chung cư mini, có gác lửng cao không đụng đầu, Diện tích phòng: 18-26 m2 Phòng thông…</p>
                        <div className="d-flex justify-content-between">
                            <div className="post-author"><img src='./img/anhdd.jpg' style={{
                                width: '30px',
                                height: '30px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                marginRight: '5px'
                            }} /> Le Trung Hai</div>
                            <div>
                                <button style={{
                                    padding: '3px 7px',
                                    borderRadius: '5px',
                                    border: '1px solid #37c',
                                    backgroundColor: '#37c',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}>Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Listroom;
