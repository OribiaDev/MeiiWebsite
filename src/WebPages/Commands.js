import { useState } from "react";

const Commands = () => {
  // Filters List
  // all, confessions, moderation, fun, emotes, utility
  const [filters] = useState([
    { filterName: "All", filterID: "all", id: 1 },
    { filterName: "Confessions", filterID: "confessions", id: 2 },
    { filterName: "Moderation", filterID: "moderation", id: 3 },
    { filterName: "Fun", filterID: "fun", id: 4 },
    { filterName: "Emotes", filterID: "emotes", id: 5 },
    { filterName: "Utility", filterID: "utility", id: 6 },
  ]);

  // Commands List
  const [commands] = useState([
    { commandName: "/help", commandDesc: "A full list of Meii's commands", commandUsage: "/help", filter: "utility", id: 1 },
    { commandName: "/confess", commandDesc: "Sends an anonymous confession", commandUsage: "/confess [confession_text]", filter: "confessions", id: 2 },
    { commandName: "/reply", commandDesc: "Anonymously replys to a sent confession", commandUsage: "/reply [confession_id] [reply_text]", filter: "confessions", id: 3 },
    { commandName: "/delete", commandDesc: "Deletes a confession", commandUsage: "/delete [confession_id]", filter: "confessions", id: 4 },
    { commandName: "/report", commandDesc: "Reports a confession", commandUsage: "/report [confession ID]", filter: "confessions", id: 5 },
    { commandName: "/settings", commandDesc: "Changes confession settings ", commandUsage: "/settings", filter: "confessions", id: 6 },
    { commandName: "/customize", commandDesc: "Lets you customize the confession embed", commandUsage: "/customize", filter: "confessions", id: 7 },
    { commandName: "/checklogs", commandDesc: "Checks to see if the server logs confessions", commandUsage: "/checklogs", filter: "confessions", id: 8 },
    { commandName: "/confessban", commandDesc: "Bans a person from confessions", commandUsage: "/confessban [@person]", filter: "moderation", id: 9 },
    { commandName: "/confessunban", commandDesc: "Unbans a person from confessions", commandUsage: "/confessunban [@person]", filter: "moderation", id: 10 },
    { commandName: "/define", commandDesc: "Gets the definition of a word", commandUsage: "/define [word]", filter: "fun", id: 11 },
    { commandName: "/binary", commandDesc: "Encodes/Decodes binary text", commandUsage: "/binary [encode/decode] [text]", filter: "fun", id: 12 },
    { commandName: "/kiss", commandDesc: "Sends a GIF kissing emote", commandUsage: "/kiss [@person]", filter: "emotes", id: 13 },
    { commandName: "/hug", commandDesc: "Sends a GIF kissing emote", commandUsage: "/hug [@person]", filter: "emotes", id: 14 },
    { commandName: "/cuddle", commandDesc: "Sends a GIF kissing emote", commandUsage: "/cuddle [@person]", filter: "emotes", id: 15 },
    { commandName: "/slap", commandDesc: "Sends a GIF slapping emote", commandUsage: "/slap [@person]", filter: "emotes", id: 16 },
    { commandName: "/kill", commandDesc: "Sends a GIF killing emote", commandUsage: "/kill [@person]", filter: "emotes", id: 17 },
    { commandName: "/yeet", commandDesc: "Sends a GIF yeet emote", commandUsage: "/yeet [@person]", filter: "emotes", id: 18 },
    { commandName: "/bonk", commandDesc: "Sends a GIF bonk emote", commandUsage: "/bonk [@person]", filter: "emotes", id: 19 },
    { commandName: "/poke", commandDesc: "Sends a GIF poke emote", commandUsage: "/poke [@person]", filter: "emotes", id: 20 },
    { commandName: "/handhold", commandDesc: "Sends a GIF handholding emote", commandUsage: "/handhold [@person]", filter: "emotes", id: 21 },
    { commandName: "/wave", commandDesc: "Sends a GIF wave emote", commandUsage: "/wave [@person]", filter: "emotes", id: 22 },
    { commandName: "/pat", commandDesc: "Sends a GIF headpat emote", commandUsage: "/pat [@person]", filter: "emotes", id: 23 },
    { commandName: "/bully", commandDesc: "Sends a GIF bullying emote", commandUsage: "/bully [@person]", filter: "emotes", id: 24 },
    { commandName: "/lick", commandDesc: "Sends a GIF licking emote", commandUsage: "/lick [@person]", filter: "emotes", id: 25 },
    { commandName: "/ban", commandDesc: "Bans the mentioned person", commandUsage: "/ban [@person]", filter: "moderation", id: 26 },
    { commandName: "/kick", commandDesc: "Kicks the mentioned person", commandUsage: "/kick [@person]", filter: "moderation", id: 27 },
    { commandName: "/animal", commandDesc: "Sends a random animal image", commandUsage: "/animal [animal_category]", filter: "fun", id: 28 },
    { commandName: "/joke", commandDesc: "Sends a random (corny) joke", commandUsage: "/joke", filter: "fun", id: 29 },
    { commandName: "/dice", commandDesc: "Rolls a 6 sided die", commandUsage: "/dice", filter: "fun", id: 30 },
    { commandName: "/coinflip", commandDesc: "Flips a coin", commandUsage: "/coinflip", filter: "fun", id: 31 },
    { commandName: "/info", commandDesc: "Shows info about a user or server", commandUsage: "/info [user/server]", filter: "utility", id: 32 },
    { commandName: "/ping", commandDesc: "Shows Meii's ping", commandUsage: "/ping", filter: "utility", id: 33 },
    { commandName: "/uptime", commandDesc: "Shows Meii's uptime", commandUsage: "/uptime", filter: "utility", id: 34 },
    { commandName: "/stats", commandDesc: "Shows Meii's stats", commandUsage: "/stats", filter: "utility", id: 35 },
    { commandName: "/support", commandDesc: "Sends the invite for Meii's support server", commandUsage: "/support", filter: "utility", id: 36 },
    { commandName: "/delete_data", commandDesc: "Deletes all stored data for the current server", commandUsage: "/delete_data", filter: "utility", id: 37 },
  ]);

  // Button Handlers
  const [selectedCommand, setSelectedCommand] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleClickCommand = (commandId) => {
    setSelectedCommand(commandId === selectedCommand ? null : commandId);
  };
  const handleClickFilter = (filter) => {
    setSelectedFilter(filter === selectedFilter ? "all" : filter);
  };

  return (
    <div className="CommandsContent">
      <head>
        <title>Commands • Meii</title>
        <meta property="og:title" content="Commands • Meii" />
        <meta name="description" content="The commands list for Meii." />
        <meta property="og:description" content="The commands list for Meii." />
        <meta property="og:url" content="meiibot.xyz/commands" />
      </head>
      <div className="CommandsLayoutContainer">
        <div className="CommandBoxContainer">
          <div className="CommandAltAnimationHandler">
            <div className="CommandsSectionTitle">Commands</div>
            <div className="CommandsFilterContainer">
              {filters.map((filter) => (
                <div
                  className="FilterButton"
                  id={`${filter.filterID === selectedFilter ? "selected" : ""}`}
                  onClick={() => handleClickFilter(filter.filterID)}
                  key={filter.id}
                >
                  <div className="FilterTitle">{filter.filterName}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="CommandListContainer">
            {commands.map((command, index) => (
              <div
                className="CommandBubbleAnimationHandler"
                style={{ animationDelay: `${25 * index}ms` }}
                key={command.id}
              >
                <div
                  className={`${
                    command.id === selectedCommand ? "CommandBubbleExpanded" : "CommandBubble"
                  }`}
                  id={`${command.filter === selectedFilter || "all" === selectedFilter ? "" : "inactive"}`}
                  onClick={() => handleClickCommand(command.id)}
                >
                  <div className="CommandBubbleInsideContainer">
                    <div className="CommandBubbleNonExpandedContainer">
                      <div className="CommandBubbleTitleContainer">
                        <div className="CommandBubbleTitle">{command.commandName}</div>
                        <div
                          className="CommandBubbleExpandArrow"
                          id={`menuButton_${command.id === selectedCommand ? "active" : "inactive"}`}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="dropdownIcon"
                            id={`dropdownIcon_${command.id === selectedCommand ? "active" : "inactive"}`}
                          >
                            <path
                              d="M7 14.5l5-5 5 5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="CommandBubbleDesc">{command.commandDesc}</div>
                    </div>
                    <div className="CommandBubbleExpandedContainer" id={`${command.id === selectedCommand ? "" : "inactive"}`}>
                      <div className="CommandBubbleField">
                        <div className="CommandBubbleFieldTitle">Usage</div>
                        <div className="CommandBubbleFieldSubTitleContainer" id="usage">
                          <div className="CommandBubbleFieldSubTitle">{command.commandUsage}</div>
                        </div>
                      </div>
                      <div className="CommandBubbleField">
                        <div className="CommandBubbleFieldTitle">Category</div>
                        <div className="CommandBubbleFieldSubTitle">{command.filter}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commands;
