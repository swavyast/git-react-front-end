function ToggleButton ({ dropdownStatus, setDropdownStatus }) {
    return <div>
        <button className="btn btn-dark m-0 p-0" type="button" style={{ transform: 'rotate(90deg)', marginLeft: '2px', marginTop: '2px' }} onPointerEnter={() => setDropdownStatus( !dropdownStatus )} onPointerLeave={() => setDropdownStatus( !dropdownStatus )}>
            <div className="p-1" style={{ marginRight: '3px', marginBottom: '4px' }}><span className="text-center">&nbsp;|||</span></div>
        </button>
    </div>;
}

export default ToggleButton;