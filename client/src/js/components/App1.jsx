render() {
  if (this.state.home) {
    return (
      <div>
        <div id="board">
          <div className="title_0 " >{this.state.home.propertyType}</div>
          <Header data={this.state.home} />
          <Accomodations data={this.state.home} />
          <ViewsAlert data={this.state.home.numberOfViews} />
          <Highlights data={this.state.home.highlights} />
          <p className="paragraph">{this.state.home.descriptionSummary}</p>
          <HomeDescription data={this.state.home.description} />
          <div id="contactHost">
            <div className="buttonHover_1" >
              <div className="button_1" >Contact host</div>
            </div>
          </div>
          <Amenities data={this.state.home.amenities} />
          <SleepingArrangements data={this.state.home} />
          <HouseRules data={this.state.home} />
          <Cancellations data={this.state.home} />
          <Availability data={this.state.home} />
        </div>
      </div>
    );
  }
