var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var JSONFileEditor = require('naturalCrit/jsonFileEditor/jsonFileEditor.jsx');

var Sidebar = React.createClass({

	getDefaultProps: function() {
		return {
			selectedEncounter : null,

			monsterManual : {},
			encounters : [],

			onSelectEncounter : function(){},

			onJSONChange : function(encounterIndex, json){},
		};
	},

	getInitialState: function() {
		return {
			hide : false
		};
	},

	handleLogoClick : function(){
		this.setState({
			hide : !this.state.hide
		})
	},

	handleJSONChange : function(encounterIndex, json){


		this.props.onJSONChange(encounterIndex, json);


	},

	handleSelectEncounter : function(encounterIndex){
		console.log(encounterIndex);
		this.props.onSelectEncounter(encounterIndex);
	},

	renderEncounters : function(){
		var self = this;

		return _.map(this.props.encounters, function(encounter, index){
			console.log(self.props.selectedEncounter, index);

			var isSelected = self.props.selectedEncounter == index;
			return <div className={cx('encounter' , {'selected' : isSelected})} key={index}>

				<i onClick={self.handleSelectEncounter.bind(self, index)} className={cx('fa', {
					'fa-square-o' : !isSelected,
					'fa-check-square-o' : isSelected,
				})} />


				<JSONFileEditor
					name={encounter.name}
					json={encounter}
					onJSONChange={self.handleJSONChange.bind(self, index)}
				/>
			</div>
		})
	},

	render : function(){
		var self = this;
		return(
			<div className={cx('sidebar', {'hide' : this.state.hide})}>
				<div className='logo'>
					<svg onClick={this.handleLogoClick} version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><path d="M80.644,87.982l16.592-41.483c0.054-0.128,0.088-0.26,0.108-0.394c0.006-0.039,0.007-0.077,0.011-0.116  c0.007-0.087,0.008-0.174,0.002-0.26c-0.003-0.046-0.007-0.091-0.014-0.137c-0.014-0.089-0.036-0.176-0.063-0.262  c-0.012-0.034-0.019-0.069-0.031-0.103c-0.047-0.118-0.106-0.229-0.178-0.335c-0.004-0.006-0.006-0.012-0.01-0.018L67.999,3.358  c-0.01-0.013-0.003-0.026-0.013-0.04L68,3.315V4c0,0-0.033,0-0.037,0c-0.403-1-1.094-1.124-1.752-0.976  c0,0.004-0.004-0.012-0.007-0.012C66.201,3.016,66.194,3,66.194,3H66.19h-0.003h-0.003h-0.004h-0.003c0,0-0.004,0-0.007,0  s-0.003-0.151-0.007-0.151L20.495,15.227c-0.025,0.007-0.046-0.019-0.071-0.011c-0.087,0.028-0.172,0.041-0.253,0.083  c-0.054,0.027-0.102,0.053-0.152,0.085c-0.051,0.033-0.101,0.061-0.147,0.099c-0.044,0.036-0.084,0.073-0.124,0.113  c-0.048,0.048-0.093,0.098-0.136,0.152c-0.03,0.039-0.059,0.076-0.085,0.117c-0.046,0.07-0.084,0.145-0.12,0.223  c-0.011,0.023-0.027,0.042-0.036,0.066L2.911,57.664C2.891,57.715,3,57.768,3,57.82v0.002c0,0.186,0,0.375,0,0.562  c0,0.004,0,0.004,0,0.008c0,0,0,0,0,0.002c0,0,0,0,0,0.004v0.004v0.002c0,0.074-0.002,0.15,0.012,0.223  C3.015,58.631,3,58.631,3,58.633c0,0.004,0,0.004,0,0.008c0,0,0,0,0,0.002c0,0,0,0,0,0.004v0.004c0,0,0,0,0,0.002v0.004  c0,0.191-0.046,0.377,0.06,0.545c0-0.002-0.03,0.004-0.03,0.004c0,0.004-0.03,0.004-0.03,0.004c0,0.002,0,0.002,0,0.002  l-0.045,0.004c0.03,0.047,0.036,0.09,0.068,0.133l29.049,37.359c0.002,0.004,0,0.006,0.002,0.01c0.002,0.002,0,0.004,0.002,0.008  c0.006,0.008,0.014,0.014,0.021,0.021c0.024,0.029,0.052,0.051,0.078,0.078c0.027,0.029,0.053,0.057,0.082,0.082  c0.03,0.027,0.055,0.062,0.086,0.088c0.026,0.02,0.057,0.033,0.084,0.053c0.04,0.027,0.081,0.053,0.123,0.076  c0.005,0.004,0.01,0.008,0.016,0.01c0.087,0.051,0.176,0.09,0.269,0.123c0.042,0.014,0.082,0.031,0.125,0.043  c0.021,0.006,0.041,0.018,0.062,0.021c0.123,0.027,0.249,0.043,0.375,0.043c0.099,0,0.202-0.012,0.304-0.027l45.669-8.303  c0.057-0.01,0.108-0.021,0.163-0.037C79.547,88.992,79.562,89,79.575,89c0.004,0,0.004,0,0.004,0c0.021,0,0.039-0.027,0.06-0.035  c0.041-0.014,0.08-0.034,0.12-0.052c0.021-0.01,0.044-0.019,0.064-0.03c0.017-0.01,0.026-0.015,0.033-0.017  c0.014-0.008,0.023-0.021,0.037-0.028c0.14-0.078,0.269-0.174,0.38-0.285c0.014-0.016,0.024-0.034,0.038-0.048  c0.109-0.119,0.201-0.252,0.271-0.398c0.006-0.01,0.016-0.018,0.021-0.029c0.004-0.008,0.008-0.017,0.011-0.026  c0.002-0.004,0.003-0.006,0.005-0.01C80.627,88.021,80.635,88.002,80.644,87.982z M77.611,84.461L48.805,66.453l32.407-25.202  L77.611,84.461z M46.817,63.709L35.863,23.542l43.818,14.608L46.817,63.709z M84.668,40.542l8.926,5.952l-11.902,29.75  L84.668,40.542z M89.128,39.446L84.53,36.38l-6.129-12.257L89.128,39.446z M79.876,34.645L37.807,20.622L65.854,6.599L79.876,34.645  z M33.268,19.107l-6.485-2.162l23.781-6.487L33.268,19.107z M21.92,18.895l8.67,2.891L10.357,47.798L21.92,18.895z M32.652,24.649  l10.845,39.757L7.351,57.178L32.652,24.649z M43.472,67.857L32.969,92.363L8.462,60.855L43.472,67.857z M46.631,69.09l27.826,17.393  l-38.263,6.959L46.631,69.09z"></path></svg>
					<span className='name'>
						Natural<span className='crit'>Crit</span>
					</span>
				</div>
				<div className='contents'>

					<div className='monsterManualContainer'>
						<i className='fa fa-book' />
						<JSONFileEditor name="Monster Manual" />
					</div>
					<div className='encounterContainer'>
						<h3> <i className='fa fa-flag' /> encounters </h3>
						{this.renderEncounters()}
					</div>
					<div className='encounterStats'>

					</div>
					<div className='addPC'>

					</div>



				</div>


			</div>
		);
	}
});

module.exports = Sidebar;
