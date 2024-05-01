import bootstrap from 'bootstrap'
import './TabPanel.scss'
const TabPanel = () => {
    return (
        <>
            <div className="container responsive-tabs">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a id="tab-A" href="#pane-A" className="nav-link active" data-bs-toggle="tab" role="tab">–A–</a>
                    </li>
                    <li className="nav-item">
                        <a id="tab-B" href="#pane-B" className="nav-link  " data-bs-toggle="tab" role="tab">–B–</a>
                    </li>

                </ul>
                <div id="content" className="tab-content" role="tablist">
            <div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">
                <div className="card-header" role="tab" id="heading-A">
                    <h5 className="mb-0">
                        <a data-bs-toggle="collapse" href="#collapse-A" aria-expanded="true" aria-controls="collapse-A">
                            Collapsible Group Item A
                        </a>
                    </h5>
                </div>
                <div id="collapse-A" className="collapse show" data-bs-parent="#content" role="tabpanel"
                    aria-labelledby="heading-A">
                    <div className="card-body">[Tab content A]</div>
                </div>
            </div>
            <div id="pane-B" className="card tab-pane fade show  " role="tabpanel" aria-labelledby="tab-B">
                <div className="card-header" role="tab" id="heading-B">
                    <h5 className="mb-0">
                        <a data-bs-toggle="collapse" href="#collapse-B" aria-expanded="true" aria-controls="collapse-B">
                            Collapsible Group Item A
                        </a>
                    </h5>
                </div>
                <div id="collapse-B" className="collapse  " data-bs-parent="#content" role="tabpanel"
                    aria-labelledby="heading-B">
                    <div className="card-body">[Tab content B]</div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}


export default TabPanel;