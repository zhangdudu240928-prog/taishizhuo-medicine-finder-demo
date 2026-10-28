import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const pharmacies = [
  {
    id: 'guomao',
    name: '安康大药房（国贸店）',
    distance: '0.7km',
    minutes: '步行约10分钟',
    status: '营业中',
    hours: '08:00–22:00',
    address: '北京市朝阳区建国路 86 号东侧临街商铺',
    tags: ['可咨询处方药', '药师服务'],
    x: 69,
    y: 45,
  },
  {
    id: 'cbd',
    name: '惠民健康药房（CBD 店）',
    distance: '1.1km',
    minutes: '步行约16分钟',
    status: '营业中',
    hours: '07:30–23:00',
    address: '北京市朝阳区东三环中路 18 号一层 102',
    tags: ['可咨询处方药', '连锁药店'],
    x: 33,
    y: 62,
  },
  {
    id: 'shuangjing',
    name: '仁和堂药店（双井店）',
    distance: '1.8km',
    minutes: '步行约26分钟',
    status: '营业中',
    hours: '08:30–21:30',
    address: '北京市朝阳区广渠路 31 号底商',
    tags: ['药师服务', '到店咨询'],
    x: 80,
    y: 83,
  },
  {
    id: 'jin-song',
    name: '邻里医药服务站（劲松店）',
    distance: '2.6km',
    minutes: '步行约37分钟',
    status: '即将营业',
    hours: '09:00–21:00',
    address: '北京市朝阳区劲松三区甲 5 号',
    tags: ['到店咨询'],
    x: 17,
    y: 83,
  },
];

const hospitals = [
  {
    id: 'hospital-guomao',
    type: 'hospital',
    name: '朝阳中心医院（国贸院区）',
    level: '三甲',
    area: '朝阳区 · 国贸商圈',
    distance: '1.3km',
    minutes: '步行约19分钟',
    status: '营业中',
    hours: '门诊 08:00–17:00',
    address: '北京市朝阳区建国门外大街 12 号',
    tags: ['门诊药房', '可咨询处方药'],
    x: 40,
    y: 26,
  },
  {
    id: 'hospital-shuangjing',
    type: 'hospital',
    name: '东环仁济医院',
    level: '二级',
    area: '朝阳区 · 双井商圈',
    distance: '2.1km',
    minutes: '步行约30分钟',
    status: '营业中',
    hours: '门诊 08:30–17:30',
    address: '北京市朝阳区广渠门外大街 8 号',
    tags: ['门诊药房'],
    x: 84,
    y: 60,
  },
  {
    id: 'hospital-dongdaqiao',
    type: 'hospital',
    name: '东大桥社区医院',
    level: '二级',
    area: '朝阳区 · 东大桥商圈',
    distance: '1.6km',
    minutes: '步行约23分钟',
    status: '营业中',
    hours: '门诊 08:00–20:00',
    address: '北京市朝阳区东大桥路 45 号',
    tags: ['门诊药房', '可咨询处方药'],
    x: 24,
    y: 36,
  },
];

const allPois = [...pharmacies.map((item) => ({ ...item, type: 'pharmacy' })), ...hospitals];

function Icon({ name, size = 20, stroke = 2, className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  };

  const icons = {
    search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.25 4.25" /></>,
    map: <><path d="m9 18-5-2.5V5.3L9 7.8 15 5l5 2.5v10.7l-5-2.5L9 18Z" /><path d="M9 7.8V18M15 5v10.7" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    arrowLeft: <path d="m19 12H5m6 6-6-6 6-6" />,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.62 2.65a2 2 0 0 1-.45 2.11L8.01 9.75a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.86.29 1.75.5 2.65.62A2 2 0 0 1 22 16.92Z" />,
    navigation: <><path d="m20 4-7.5 16-2.2-7.3L3 10.5 20 4Z" /><path d="m10.3 12.7 4.2-4.2" /></>,
    hospital: <><path d="M5 21V7.8L12 4l7 3.8V21" /><path d="M3.5 21h17" /><path d="M12 9.5v5M9.5 12h5" /></>,
    cross: <><path d="M12 5v14M5 12h14" /></>,
    share: <><circle cx="18" cy="5" r="2.4" /><circle cx="6" cy="12" r="2.4" /><circle cx="18" cy="19" r="2.4" /><path d="m8.1 10.8 7.8-4.5M8.1 13.2l7.8 4.5" /></>,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2.8" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2" /></>,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 10v5M12 7h.01" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    check: <path d="m5 12 4.3 4.3L19 6.7" />,
    down: <path d="m6 9 6 6 6-6" />,
  };

  return <svg {...common}>{icons[name]}</svg>;
}

const demoDrug = {
  brand: '泰适卓',
  generic: '特泽利尤单抗注射液',
  company: '阿斯利康',
};

function App() {
  const [screen, setScreen] = React.useState('search');
  const [query, setQuery] = React.useState('泰适卓找药');
  const [selectedId, setSelectedId] = React.useState('guomao');
  const [selectedFilters, setSelectedFilters] = React.useState(['离我最近']);
  const [typeFilter, setTypeFilter] = React.useState('全部');
  const [detailOpen, setDetailOpen] = React.useState(false);
  const [callOpen, setCallOpen] = React.useState(false);
  const [notice, setNotice] = React.useState('');
  const [locationMode, setLocationMode] = React.useState('granted');
  const [emptyMode, setEmptyMode] = React.useState(false);
  const [locationPrompt, setLocationPrompt] = React.useState(false);

  const drugName = query.replace(/找药/g, '').trim() || demoDrug.brand;
  const selected = allPois.find((poi) => poi.id === selectedId) ?? allPois[0];

  const showSearchSuggestions = () => {
    if (!query.trim()) {
      notify('请输入药品通用名');
      return;
    }
    notify('已为你匹配找药地图服务');
  };
  const filteredPois = allPois.filter((poi) => {
    if (typeFilter === '药店' && poi.type !== 'pharmacy') return false;
    if (typeFilter === '医院' && poi.type !== 'hospital') return false;
    if (selectedFilters.includes('营业中') && poi.status !== '营业中') return false;
    if (selectedFilters.includes('连锁药店') && (poi.type !== 'pharmacy' || !poi.tags.includes('连锁药店'))) return false;
    return true;
  });

  const notify = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 2300);
  };

  const selectPharmacy = (id, openDetail = false) => {
    setSelectedId(id);
    if (openDetail) setDetailOpen(true);
  };

  const toggleFilter = (filter) => {
    if (filter === '离我最近') return;
    setSelectedFilters((current) => current.includes(filter)
      ? current.filter((item) => item !== filter)
      : [...current, filter]);
  };

  if (screen === 'search') {
    return (
      <div className="demo-shell search-shell">
        <header className="search-topbar">
          <button className="icon-button muted" onClick={() => notify('返回上一页')} aria-label="返回">
            <Icon name="arrowLeft" size={22} />
          </button>
          <div className="top-title">美团买药</div>
          <button className="icon-button muted" onClick={() => notify('更多功能')} aria-label="更多">
            <span className="more-dot">•••</span>
          </button>
        </header>

        <main className="search-content">
          <div className="search-row">
            <div className="search-input-wrap active">
              <Icon name="search" size={19} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && showSearchSuggestions()}
                aria-label="搜索药品"
                autoFocus
              />
              {query && (
                <button className="clear-button" onClick={() => setQuery('')} aria-label="清空搜索">
                  <Icon name="close" size={14} stroke={2.5} />
                </button>
              )}
            </div>
            <button className="search-action" onClick={showSearchSuggestions}>搜索</button>
          </div>

          <section className="suggestion-section">
            <div className="section-label">找药服务</div>
            <button className="finder-sug" onClick={() => setScreen('map')}>
              <span className="finder-sug-icon"><Icon name="map" size={20} /></span>
              <span className="finder-sug-copy">
                <strong>找附近可咨询{drugName}的药店</strong>
                <small>基于当前位置，为你查看周边药店</small>
              </span>
              <Icon name="chevron" size={18} className="chevron" />
            </button>
            <p className="sug-tip">仅提供药店信息，请以到店咨询为准</p>
          </section>

          <section className="suggestion-section ordinary-suggestions">
            <div className="section-label">搜索建议</div>
            {['泰适卓', '特泽利尤单抗', '特泽利尤单抗注射液'].map((item) => (
              <button key={item} onClick={() => setQuery(item)} className="ordinary-sug">
                <Icon name="search" size={17} />
                <span>{item}</span>
              </button>
            ))}
          </section>
        </main>
        <footer className="search-footer">附近药店 · 到店咨询更放心</footer>
        {notice && <div className="toast">{notice}</div>}
      </div>
    );
  }

  return (
    <div className="demo-shell map-shell">
      <header className="map-navbar">
        <button className="icon-button nav-round" onClick={() => setScreen('search')} aria-label="返回搜索">
          <Icon name="arrowLeft" size={21} />
        </button>
        <span>{drugName}找药</span>
          <button className="icon-button nav-round" onClick={() => notify('演示分享操作')} aria-label="分享">

          <Icon name="share" size={19} />
        </button>
      </header>

      <section className="drug-summary-card">
        <div className="drug-symbol"><Icon name="cross" size={21} stroke={2.4} /></div>
        <div className="drug-copy">
          <div className="drug-name-row"><strong>{drugName}</strong><span className="rx-badge">处方药</span></div>
          <span>通用名：{demoDrug.generic} · {demoDrug.company} · 演示数据</span>
        </div>
        <button className="change-drug" onClick={() => setScreen('search')}>换药品</button>
      </section>

      <section className="map-area" aria-label="附近药店地图">
        <div className="map-water water-one" /><div className="map-water water-two" />
        <div className="map-road road-one" /><div className="map-road road-two" /><div className="map-road road-three" />
        <div className="map-block block-one" /><div className="map-block block-two" /><div className="map-block block-three" /><div className="map-block block-four" />
        <div className="map-name map-name-one">建国路</div><div className="map-name map-name-two">东三环中路</div><div className="map-name map-name-three">国贸</div>
        <div className="demo-map-note">演示数据 · 非实时供给信息</div>

        {locationMode === 'granted' ? <div className="user-location"><span /></div> : <div className="location-hint-dot"><Icon name="location" size={18} /></div>}
        {!emptyMode && filteredPois.map((poi) => (
          <button
            className={`pharmacy-pin ${poi.type === 'hospital' ? 'hospital-pin' : ''} ${selectedId === poi.id ? 'selected' : ''}`}
            style={{ left: `${poi.x}%`, top: `${poi.y}%` }}
            key={poi.id}
            onClick={() => selectPharmacy(poi.id)}
            aria-label={poi.name}
          >
            {selectedId === poi.id && <span className="pin-label">{poi.name.replace(/（.*?）/, '')}</span>}
            <span>{poi.type === 'hospital' ? <Icon name="hospital" size={15} stroke={2.4} /> : <Icon name="cross" size={15} stroke={2.7} />}</span>
          </button>
        ))}

        <button className="map-search-button" onClick={() => notify('已按当前地图范围更新结果')}>
          <Icon name="search" size={15} /> 在地图中搜索
        </button>
        <button className="locate-button" onClick={() => locationMode === 'granted' ? notify('已定位到北京市朝阳区建国路附近') : setLocationPrompt(true)} aria-label="重新定位">
          <Icon name="target" size={20} />
        </button>
      </section>

      {locationMode !== 'granted' && (
        <div className="location-guide">
          <Icon name="location" size={17} />
          <span>开启位置权限，查看离你更近的药店</span>
          <button onClick={() => setLocationPrompt(true)}>开启定位</button>
        </div>
      )}

      <section className={`result-sheet ${emptyMode ? 'empty-sheet' : ''}`}>
        <div className="sheet-handle" />
        {emptyMode ? (
          <div className="empty-state">
            <span className="empty-icon"><Icon name="map" size={34} /></span>
            <strong>暂未找到附近可咨询的门店</strong>
            <p>药店药品情况可能随时变化，建议扩大范围或电话咨询附近药店。</p>
            <div className="empty-actions">
              <button className="outline-action" onClick={() => { setEmptyMode(false); notify('已扩大搜索范围'); }}>扩大搜索范围</button>
              <button className="primary-action" onClick={() => setLocationPrompt(true)}>更换位置</button>
            </div>
          </div>
        ) : (
          <>
            <div className="result-heading">
              <div><h1>附近有 {filteredPois.length} 家门店可咨询</h1><p>{locationMode === 'granted' ? '距你最近' : '北京市朝阳区'} · 信息仅供参考</p></div>
              <div className="demo-state-actions">
                <button className="test-state" onClick={() => setEmptyMode(true)}>演示空态</button>
                <button className="test-state" onClick={() => setLocationMode((mode) => mode === 'granted' ? 'denied' : 'granted')}>{locationMode === 'granted' ? '未授权定位' : '恢复定位'}</button>
              </div>
            </div>
            <div className="filter-row">
              {['离我最近'].map((filter) => (
                <button key={filter} className="filter-chip active">
                  {filter}<Icon name="down" size={14} />
                </button>
              ))}
{['全部', '药店', '医院'].map((type) => (
<button key={type} onClick={() => { setTypeFilter(type); if (type === '医院') setSelectedFilters((cur) => cur.filter((f) => f !== '连锁药店')); }} className={`filter-chip ${typeFilter === type ? 'active' : ''}`}>
                  {type}
                </button>
              ))}
              {['营业中', ...(typeFilter === '医院' ? [] : ['连锁药店'])].map((filter) => (
                <button key={filter} onClick={() => toggleFilter(filter)} className={`filter-chip ${selectedFilters.includes(filter) ? 'active' : ''}`}>
                  {filter}
                </button>
              ))}
            </div>
            <div className="pharmacy-list">
              {filteredPois.map((poi) => (
                <button key={poi.id} className={`pharmacy-card ${selectedId === poi.id ? 'active-card' : ''}`} onClick={() => selectPharmacy(poi.id, true)}>
                  <div className="pharmacy-card-top">
                    <strong>{poi.name}</strong>
                    {poi.type === 'hospital' && <i className="level-badge">{poi.level}</i>}
                    <span>{poi.distance}</span>
                  </div>
                  <div className="status-line"><em className={poi.status === '营业中' ? 'open' : 'soon'}>{poi.status}</em><i /> {poi.minutes}</div>
                  <p>{poi.type === 'hospital' ? poi.area : poi.address}</p>
                  <div className="tag-row">{poi.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <span className="card-chevron"><Icon name="chevron" size={18} /></span>
                </button>
              ))}
            </div>
          </>
        )}
        <div className="prescription-notice"><Icon name="info" size={15} /> 处方药请凭处方按药师指导购买和使用</div>
      </section>

      {detailOpen && (
        <div className="modal-layer" onClick={() => setDetailOpen(false)}>
          <section className="detail-sheet" onClick={(event) => event.stopPropagation()}>
            <div className="sheet-handle" />
            <button className="modal-close" onClick={() => setDetailOpen(false)} aria-label="关闭"><Icon name="close" size={19} /></button>
            <h2>{selected.name}</h2>
            <p className="detail-distance">距你 {selected.distance} · {selected.minutes}</p>
            <div className="detail-status"><span className={selected.status === '营业中' ? 'open' : 'soon'}>{selected.status}</span> {selected.hours}</div>
            {selected.type === 'hospital' && <div className="detail-area"><Icon name="hospital" size={16} /><span>{selected.level} · {selected.area}</span></div>}
            <div className="detail-address"><Icon name="location" size={18} /><span>{selected.address}</span><button onClick={() => notify('地址已复制')}>复制</button></div>
            <div className="service-section"><h3>服务信息</h3><div className="tag-row">{selected.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><p>{selected.type === 'hospital' ? '请先电话咨询医院门诊药房，确认药品情况及就诊要求。' : '请先电话咨询药店，确认药品情况及到店所需材料。'}</p></div>
            <div className="detail-actions">
              <button className="call-action" onClick={() => setCallOpen(true)}><Icon name="phone" size={18} />电话咨询</button>
              <button className="navigate-action" onClick={() => notify(`演示：已规划前往${selected.name}的路线`)}><Icon name="navigation" size={18} />到这里去</button>
            </div>
            <div className="detail-rx-tip"><Icon name="info" size={15} />处方药请凭处方，在药师指导下购买和使用</div>
          </section>
        </div>
      )}

      {callOpen && (
        <div className="modal-layer dim" onClick={() => setCallOpen(false)}>
          <section className="confirm-dialog" onClick={(event) => event.stopPropagation()}>
            <span className="dialog-icon"><Icon name="phone" size={24} /></span>
            <h2>咨询药店</h2>
            <p>你将联系“{selected.name}”咨询{drugName}相关信息。药品供应及购买条件以药店实际情况、有效处方和药师指导为准。</p>
            <div className="dialog-actions"><button onClick={() => setCallOpen(false)}>暂不咨询</button><button onClick={() => { setCallOpen(false); setDetailOpen(false); notify('演示：已发起电话咨询'); }}>拨打电话</button></div>
          </section>
        </div>
      )}

      {locationPrompt && (
        <div className="modal-layer dim" onClick={() => setLocationPrompt(false)}>
          <section className="confirm-dialog location-dialog" onClick={(event) => event.stopPropagation()}>
            <span className="dialog-icon blue"><Icon name="location" size={24} /></span>
            <h2>开启位置服务</h2>
            <p>用于展示离你更近的药店。你的位置信息仅用于本次找药服务。</p>
            <div className="dialog-actions"><button onClick={() => { setLocationPrompt(false); notify('你可以手动选择位置'); }}>手动选择</button><button onClick={() => { setLocationMode('granted'); setLocationPrompt(false); notify('已定位到北京市朝阳区建国路附近'); }}>允许定位</button></div>
          </section>
        </div>
      )}

      {notice && <div className="toast">{notice}</div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
